const weekDays = [
    'M', 'T', 'W', 'Th', 'Fr', 'S', 'Su'
]

const habits = [
    {
        img: "./assets/img/habit_1.svg",
        name: "Task 1",
        completed: [true, false, true, false, false, false, false]
    }
]

const getWeekDaysElement = (completed) => weekDays.map((name, index) => completed[index] ?
    `<button class="button-checked">
            <img src="./assets/img/done_icon.svg" alt="done" width="30" />
        </button>`
    : `<button>${name}</button>`
).join('')

const getHabitElement = ({ img, name, completed }) => `<div class="mb-8">
<div class="habit-header">
  <img src="${img}" alt="habit_1" width="100" />
  <span class="font-semibold text-2xl">${name}</span>
</div>
<div class="habit-plan">
    ${getWeekDaysElement(completed)}
  </div>
</div>`

const habitContainer = document.querySelector(".habit-container")
habitContainer.innerHTML = habits.map(habit => getHabitElement(habit)).join('')
