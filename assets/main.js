const weekDays = [
    'M', 'T', 'W', 'Th', 'Fr', 'S', 'Su'
]

const habits = [
    {
        id: 1,
        img: "./assets/img/habit_1.svg",
        name: "Task 1",
        completed: [true, false, true, false, false, false, false]
    }
]

const getDayButton = ({ id }, isChecked, index, dayName) =>
    `<button class="${isChecked ? 'checked' : ' '}" onClick="toggleHabit('${id}','${index}')">
    <img src="./assets/img/done_icon.svg"  width="30" alt="">
        <span>${dayName}</span>
    </button>`

const toggleHabit = (habitId, index) => {
    const el = document.querySelectorAll(`[data-id = '${habitId}'] .habit-plan button`)
    if (el[index].classList.contains('checked')) {
        el[index].classList.remove('checked')
    } else {
        el[index].classList.add('checked')
    }
    // render(habits.map(habit => {
    //     if (habit.name === habitName) {
    //         habit.completed[index] = !habit.completed[index]
    //         return habit
    //     }
    // }))
}

const getWeekDaysElement = (habit) => {
    return weekDays.map((name, index) =>
        getDayButton(habit, habit.completed[index], index, name)
    ).join('')
}

const getHabitElement = (habit) => `<div class="mt-4 mb-4 habit" data-id='${habit.id}'>
<div class="habit-header">
  <img src="${habit.img}" alt="habit_1" width="100" />
  <span class="font-semibold text-2xl">${habit.name}</span>
</div>
<div class="habit-plan">
    ${getWeekDaysElement(habit)}
  </div>
</div>`

const render = (habits) => {
    const habitContainer = document.querySelector(".habit-container")
    habitContainer.innerHTML = habits.map(habit => getHabitElement(habit))
        .join('')
}


render(habits)