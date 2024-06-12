import { Librarian } from "../classes";
import { convertStringToDate } from "./date";

export function getFilteredTasks(type) {
    const today = new Date();
    var nextWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate()+7);

    const returnedArr = {tasks: []};
    Librarian.projects.forEach((project) => {
        project.tasks.forEach((task) => {
            const taskDate = convertStringToDate(task.date);

            if (type === 'today') {
                returnedArr.name = "Today";
                // Add task to returnedArr if taskDate is today
                if (taskDate.getFullYear() === today.getFullYear() && 
                    taskDate.getMonth() === today.getMonth() &&
                    taskDate.getDate() === today.getDate()) {
                        returnedArr.tasks.push(task);
                }
            } 
            
            else if (type === 'nextweek') {
                if (taskDate.getTime() <= nextWeek.getTime()) {
                    returnedArr.tasks.push(task);
                }
            } 
            
            else {
                returnedArr.tasks.push(task);
            }
        })
    })

    return returnedArr;
}