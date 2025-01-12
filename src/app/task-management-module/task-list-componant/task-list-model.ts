
export class TaskList {
    dataSource!: Array<any>;

    displayedColumns: Array<any> = [
        {
            id: 'title',
            label: 'TaskName',
            property: 'title',
        },
        { id: 'description', label: 'Description', property: 'description' },
        { id: 'dueDate', label: 'Due Date', property: 'dueDate' },
        {
            id: 'status',
            label: 'Task Status',
            property: 'status',
        },

        { id: 'actions', label: 'Action', property: 'actions' },
    ];
} 
