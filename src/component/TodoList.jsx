import React from 'react';
import TaskItem from "./TaskItem";

export default class TodoList extends React.Component {
    render() {
        let validTasks = [...this.props.tasks];
        // if (this.props.filterValue === 'done') {
        //     validTasks = validTasks.filter(task => task.done && !task.deleted);
        // } else if (this.props.filterValue === 'deleted') {
        //     validTasks = validTasks.filter(task => task.deleted);
        // } else if (this.props.filterValue === 'all') {
        //     validTasks = validTasks.filter(task => !task.deleted);
        // }
        return (
            <div>
                {
                    validTasks.filter(task => task.name.includes(this.props.searchValue))
                        .map(task =>
                            <TaskItem 
                                onTaskDelete={this.props.onTaskDelete}
                                onTaskToggle={this.props.onTaskToggle}
                                key={task.id}
                                task={task} />
                            )
                }
            </div>
        )
    }
}