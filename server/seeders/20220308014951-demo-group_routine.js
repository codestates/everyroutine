"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "group_routines",
      [
        {
          routine_name: "물 2L 마시기",
          editor_id: 1,
          tag_name: "[health, lifestyle, workout]",
          image: "https://dmwedtsa0n9p4.cloudfront.net/media/uploads/2021/07/12/06_-1.png",
          contents: "하루동안 물을 2L 마시는 루틴입니다. 출석률에 따라 물양 조정합니다.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          routine_name: "스트레칭 하기",
          editor_id: 1,
          tag_name: "[health, workout]",
          image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fsteptohealth.co.kr%2Fmuscle-stretching-or-muscle-strengthening-which-is-best%2F&psig=AOvVaw1oAOmXRePeCSDDpDbGncHD&ust=1646840767537000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMiYzo3utvYCFQAAAAAdAAAAABAF",
          contents: "아침 점심 저녁 식사후 10분 이상 스트레칭을 하는 루틴입니다.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          routine_name: "아침 조깅 3km",
          editor_id: 1,
          tag_name: "[health, lifestyle, workout]",
          image: "",
          contents: "아침 7시에 조깅하는 루틴입니다. 조깅으로 시작하여 활기찬 하루를 만들어보아요!!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          routine_name: "기도 하기",
          editor_id: 4,
          tag_name: "[mission]",
          image: "",
          contents: "식사전 기도, 아침에 하루를 위한 기도, 취침전 기도를 하는 루틴입니다.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          routine_name: "출퇴근 시간만 핸드폰 게임하기",
          editor_id: 5,
          tag_name: "[health, lifestyle, workout]",
          image: "",
          contents: "평소 습관적으로 게임하는 시간이 많으신 분들에게 가입을 권유합니다.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          routine_name: "부모님께 연락하기",
          editor_id: 6,
          tag_name: "[mission]",
          image: "",
          contents: "하루 한번 이상 부모님께 전화 또는 문자 하는 루틴입니다.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          routine_name: "아침밥 먹기",
          editor_id: 7,
          tag_name: "[health, lifestyle]",
          image: "",
          contents: "간단하게라도 아침밥을 먹는 습관을 기르기 위한 루틴입니다.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          routine_name: "30분 책 읽기",
          editor_id: 8,
          tag_name: "[lifestyle, mission]",
          image: "",
          contents: "하루 30분씩 책을 읽는 루틴입니다. 어떠한 책이라도 좋습니다. 책은 마음의 양식입니다.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("group_routines", null, {});
  },
};
