function ChangeDefs() {
    statefulExerciseManager.props.problemProgress.hintsAreFree = true;
    statefulExerciseManager.props.problemProgress.hintsVisible = 10;
    statefulExerciseManager.props.problemProgress.totalHints = 5;
    statefulExerciseManager.props.problemProgress.answerStatus = "correct";
    console.log("did")
};

setInterval(ChangeDefs, 1000);
