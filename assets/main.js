const weekDays = [
    'M', 'T', 'W', 'Th', 'Fr', 'S', 'Su'
]

const habits = [
    {
        id: 1,
        img: "./assets/img/habit_1.svg",
        name: "Task 1",
        completed: [false, false, false, false, false, false, false]
    }
]

const getDayButton = ({ id }, isChecked, index, dayName) =>
    `<button class="${isChecked ? 'checked' : ' '}" onClick="toggleHabit('${id}','${index}')">
    <img src="./assets/img/done_icon.svg"  width="30" alt="">
        <span>${dayName}</span>
    </button>`

const toggleHabit = (habitId, index) => {
    const el = document.querySelectorAll(`[data-id = '${habitId}'] .habit-plan button`)
    const progressBarElement = document.querySelector('.progress-bar > div')
    const isChecked = el[index].classList.contains('checked')
    const countDays = habits.length * 7
    const percentOneDay = 100 / countDays


    if (isChecked) {
        el[index].classList.remove('checked')
    }
    else {
        el[index].classList.add('checked')
    }

    const currentPercent = +progressBarElement.textContent.replace('%', '')
    const percentProgress = isChecked ? currentPercent - percentOneDay : currentPercent + percentOneDay
    console.log(percentProgress);
    progressBarElement.textContent = percentProgress.toFixed(1) + "%"
    progressBarElement.style.width = percentProgress.toFixed(1) + "%"
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