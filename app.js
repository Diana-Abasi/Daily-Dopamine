document.addEventListener("DOMContentLoaded", () => {
    const saveNameBtn = document.getElementById("save-name-btn");
    const setGoalBtn = document.getElementById("set-goal-btn");
    const confirmGoalBtn = document.getElementById("confirm-goal-btn");
    const goalOptions = document.getElementById("goal-options");
    const goalSelect = document.getElementById("goal-select");
    const logHabitBtn = document.getElementById("log-habit-btn");
    const habitProgress = document.getElementById("habit-progress");
    const resetGoalBtn = document.getElementById("reset-goal-btn");
    const milestoneCount = document.getElementById("milestone-count");
    const getBoostBtn = document.getElementById("get-boost-btn");
    const startQuizBtn = document.getElementById("start-quiz-btn");
    const dailyChallengeBtn = document.getElementById("daily-challenge-btn");
    const relaxModeBtn = document.getElementById("relax-mode-btn");
    const activityModal = document.getElementById("activity-modal");
    const activityTitle = document.getElementById("activity-title");
    const activityContent = document.getElementById("activity-content");
    const closeActivityBtn = document.getElementById("close-activity-btn");

    let milestones = 0;

    saveNameBtn.addEventListener("click", () => {
        alert("Name saved successfully!");
    });

    setGoalBtn.addEventListener("click", () => {
        goalOptions.classList.remove("hidden");
    });

    confirmGoalBtn.addEventListener("click", () => {
        const selectedGoal = goalSelect.value;
        if (!selectedGoal) {
            alert("Please select a goal!");
            return;
        }
        alert(`Goal "${selectedGoal}" set successfully!`);
        goalOptions.classList.add("hidden");
    });

    logHabitBtn.addEventListener("click", () => {
        habitProgress.classList.remove("hidden");
        alert("Habit logged successfully!");
    });

    resetGoalBtn.addEventListener("click", () => {
        milestones = 0;
        milestoneCount.textContent = milestones;
        alert("Progress reset! Achievements remain intact.");
    });

    function openActivity(title, content) {
        activityTitle.textContent = title;
        activityContent.textContent = content;
        activityModal.classList.remove("hidden");
    }

    getBoostBtn.addEventListener("click", () => openActivity("Motivation Boost", "You can do it! Stay strong!"));
    startQuizBtn.addEventListener("click", () => openActivity("Fun Quiz", "Question: What's 2 + 2?"));
    dailyChallengeBtn.addEventListener("click", () => openActivity("Daily Challenge", "Write three goals for today!"));
    relaxModeBtn.addEventListener("click", () => openActivity("Relax Mode", "Take a deep breath and relax."));

    closeActivityBtn.addEventListener("click", () => {
        activityModal.classList.add("hidden");
    });
});