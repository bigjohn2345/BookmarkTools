var reset = confirm("Reset hint mode?");

function ChangeDefs() {
    statefulExerciseManager.props.problemProgress.hintsAreFree = true;
    statefulExerciseManager.props.problemProgress.hintsVisible = 10;
    statefulExerciseManager.props.problemProgress.answerStatus = "correct";
    console.log("did")
};

if (reset) {
    statefulExerciseManager.props.problemProgress.hintsVisible = 0;
    statefulExerciseManager.props.problemProgress.answerStatus = "correct";
    console.log("did reset")
} else {
    ChangeDefs()
    console.log("did show")
}

//setInterval(ChangeDefs, 1000);
