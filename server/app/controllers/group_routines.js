const { user, group_cal, group_routine, march22_date, comment, group_user } = require("../../models");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");


module.exports = {


  // TODO: 날짜 데이터 보내기 => 현재 날 - 15일까지


  // FIXME: 그룹 루틴 초기 화면 (group_routines)
    // get: 내가 가입한 그룹루틴 보여주기
    //      내가 가입하지 않은 그룹루틴 보여주기(최신 그룹 순으로)

  // FIXME: 그룹루틴 검색 (search_group_routines)
    // 초기화면은 우선 내가 가입하지 않은 그룹 보여주기
      // 태그를 누르면 가입하지 않은 그룹 중 태그가 포함된 그룹 보여주기

        // ==========> 그룹 루틴 초기 화면은 ajax call이 두번 생긴다.
    
  // FIXME: 그룹 루틴 생성 (create_group_routines)
    // post: 그룹 루틴 만들기(그룹이름, 그룹소개, 태그, 이미지)
      // 유저 이메일 or ID 보내기(토큰)

  
  // TODO: 특정 그룹 루틴 초기 화면 (group_rotine_name)
    // get: 소개, 가입인원, 댓글, 달성률, 날짜별 데이터 자료
    // post: 코멘트 남기기
    // get(?): 탈퇴하기


  // 테스트용
  test: {
    get: async (req, res) => {
      // group_routine.findAll({where : {editor_id: 1}}).then(data => res.json(data))
      
      // await comment.findAll({ where: {group_routine_id : 1}})
      // .then(data => data.map(el => new Object({comment: el.comment, user_id: el.user_id})))
      // .then(result => res.json(result));

      const max = await group_routine.findOne({
        order: [ [ 'id', 'DESC' ]],
        })
      res.json(max.id)
    }
  },

  // 내가 가입한 그룹 루틴 보여주기
  group_routines: {
    get: async (req, res) => {
      
      // TODO: client 연결 후 이메일은 토큰으로 바꾸기
      const { email } = await req.body;

      // function getCookie(name) {
      //   let matches = req.headers.cookie.match(
      //     new RegExp(
      //       "(?:^|; )" +
      //         name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
      //         "=([^;]*)"
      //     )
      //   );
      //   return matches ? decodeURIComponent(matches[1]) : undefined;
      // }
      // const accessToken = getCookie("accessToken");
      // const { email } = jwt.verify(accessToken, process.env.ACCESS_SECRET);

      try {
        // 유저테이블에서 나의 user.id 찾기
        const myUserId = await user.findOne({ where : { email }}).then(data => data.id)

        // 내가 가입한 그룹 아이디 찾기 => [1, 3, 4, 5, 6, 8]
        const myGroupId = await group_user.findAll({ where : { user_id : myUserId} })
        .then(data => data.map(el => el.group_routine_id))

        // 가입한 그룹 아이디 배열을 이용하여 가입된 그룹 루틴을 한번에 검색
        const registeredGroup = await group_routine.findAll({ where : { id : myGroupId }})

        return res.status(200).json({data : registeredGroup, message: "이건 가입된 그룹루틴입니다"})
      }
      
      catch {
        return res.status(400).json({ message: "Bad request" })
      }
    }
  },


  // 태그별 그룹 루틴

  // 초기화면
  // GET : localhost:4000/group-routine/tag?name=all
  // console.log(req.query)  ==>  { name: 'all' }

  // health tag 눌렀을때 (health, workout, lifestyle, mission)
  // GET : localhost:4000/group-routine/tag?name=health
  // console.log(req.query)  ==>  { name: 'health' }
  group_routine_tag: {
    get: async (req, res) => {

       // TODO: client 연결 후 이메일은 토큰으로 바꾸기
       const { email } = await req.body;

       // function getCookie(name) {
       //   let matches = req.headers.cookie.match(
       //     new RegExp(
       //       "(?:^|; )" +
       //         name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
       //         "=([^;]*)"
       //     )
       //   );
       //   return matches ? decodeURIComponent(matches[1]) : undefined;
       // }
       // const accessToken = getCookie("accessToken");
       // const { email } = jwt.verify(accessToken, process.env.ACCESS_SECRET);


      try {
        // 내가 가입 안한 루틴
        // 유저테이블에서 나의 user.id 찾기
        const myUserId = await user.findOne({where : { email }})
          .then(data => data.id)

        // 내가 가입한 그룹루틴 아이디 찾기 => [1, 3, 4, 5, 6, 8]
        const myGroupId = await group_user.findAll({ where : { user_id : myUserId} })
          .then(data => data.map(el => el.group_routine_id));
        
        // 내가 가입안한 그룹루틴 찾기
        const unRegisterdGroup = await group_routine.findAll({ raw: true , where : { id : { [Op.notIn] : myGroupId }}});

        // 만약 All tag를 클릭할때
        if(req.query.name === 'all') {
          return res.status(200).json({data: unRegisterdGroup, message: "가입 안한 루틴 중 모든 태그가 포함된 데이터"});
        } 
        
        // 가입 안한 루틴 중 All tag가 아닌 다른 태그가 올때
        return await group_routine.findAll({
            where: {
              [Op.and]: [
                { tag_name: { [Op.substring]: req.query.name }},
                { id : { [Op.notIn] : myGroupId }}
              ]
            }
          }).then(data => res.status(200).json({data, message: "가입 안한 루틴 중 요청된 태그가 포함된 데이터"}));
      }
      
      catch {
        return res.status(400).json({ message: "Bad request" });
      }

    }
  },

  group_routine_create: {
    post: async (req, res) => {
      const {routine_name, tag_name, image, contents} = await req.body;

      // TODO: client 연결 후 이메일은 토큰으로 바꾸기
      const { email } = await req.body;

      // function getCookie(name) {
      //   let matches = req.headers.cookie.match(
      //     new RegExp(
      //       "(?:^|; )" +
      //         name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
      //         "=([^;]*)"
      //     )
      //   );
      //   return matches ? decodeURIComponent(matches[1]) : undefined;
      // }
      // const accessToken = getCookie("accessToken");
      // const { email } = jwt.verify(accessToken, process.env.ACCESS_SECRET);


      // TODO: 태그 어떻게 넣을지 상의해보기!!

      try {
        // 유저테이블에서 나의 user.id 찾기
        const editorId = await user.findOne({ where : { email }}).then(data => data.id)

        // 그룹 루틴 데이터 추가하기 (최소한 루틴 네임, 루틴 소개는 포함해야됨)
        if(routine_name && contents) {
          // 그룹 루틴 만들기
          await group_routine.create({ routine_name, tag_name, image, contents, editor_id: editorId })

          // 그룹장도 그룹에 일원이므로 group-user에 데이터 넣어주기
          // 가장 최신에 만들어진 그룹루틴 찾기
          const newGroup = await group_routine.findOne({ order: [[ 'id', 'DESC' ]] })
          await group_user.create({ user_id: editorId, group_routine_id: newGroup.id})

          return res.status(201).json({ data: newGroup, message: "Created your new group routine" })
        }
      }

      catch {
        return res.status(400).json({ message: "Bad request" });
      }
    }
  },

  // TODO: Front에서 가입된 그룹루틴 누를떄랑 가입안된 그룹루틴 누를때랑 똑같음!
    // 가입된 그룹 루틴 선택 : 코멘트를 쓰는 인풋창 있음, 콘텐츠, 날짜선택, 댓글, 루틴달성률, 그룹탈퇴하기 버튼
    // 가입안된 그룹 루틴 선택 : 콘텐츠, 날짜선택, 댓글, 루틴달성률, 그룹가입하기 버튼

  select_group_routine: {
    get: (req, res) => {

    }
  }


}

