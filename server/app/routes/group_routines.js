const router = require("express").Router();
const controller = require("../controllers/group_routines");

// 그룹루틴 주소
// app.use("/group-routine", groupRoutineRouter);

// test용
router.get("/test", controller.test.get);

// 그룹 루틴 초기화면_1 : 내 그룹루틴 가져오기
router.get("/", controller.group_routines.get);

// 그룹 루틴 초기화면_2 : 태그별로 그룹루틴 가져오기
router.get("/tag", controller.group_routine_tag.get);

// 그룹 루틴 만들기
router.post("/create", controller.group_routine_create.post);


module.exports = router;
