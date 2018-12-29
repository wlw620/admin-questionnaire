let steps = ["/questionnaire", "/step1", "/step2", "/step3", "/step4", "/step5", "/step6"];

export default {
  state: {
    num: 0,
    curStep: '/questionnaire'
  },
  getters: {

  },
  mutations: {
    setStep(state, path) {
      state.curStep = path;
      state.num = steps.indexOf(path);
    }
  }
}
