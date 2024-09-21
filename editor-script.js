const workoutText = document.querySelector(".workout-text");
const addExerciseButton = document.querySelector(".add-exercise");
const exerciseNameInput = document.querySelector(".exercise-name");
const setNumberInput = document.querySelector(".set-number");
const repNumberInput = document.querySelector(".rep-number");
const saveWorkoutButton = document.querySelector(".save-workout");
let workoutObject = [];
addExerciseButton.onclick = addExercise;
saveWorkoutButton.onclick = saveWorkout;

function addExercise() {
	const exercise = {"name" : exerciseNameInput.value, "sets" : setNumberInput.value, "reps" : repNumberInput.value}
	workoutObject.push(exercise);
	workoutText.innerText += "\n" + exercise.name + "     " + exercise.sets + "      " + exercise.reps + "\n";
}
function saveWorkout() {

}
