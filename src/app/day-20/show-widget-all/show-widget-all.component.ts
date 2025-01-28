import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-show-widget-all',
  templateUrl: './show-widget-all.component.html',
  styleUrls: ['./show-widget-all.component.scss']
})
export class ShowWidgetAllComponent {
  chart!: Chart
  notifications = [
    'Order #1234 has been shipped.',
    'New user registered: John Doe.',
    'Order #5678 has been delivered.'
  ];
  unreadCount = this.notifications.length;


  tasks = [
    { name: 'Review sales report.', completed: false },
    { name: 'Update user permissions.', completed: false }
  ];
  newTask = '';


  constructor() {
    Chart.register(...registerables);
  }
  ngOnInit() {
    this.renderSalesChart();
  }



  renderSalesChart() {
    const ctx = document.getElementById('salesChart') as HTMLCanvasElement;
    console.log("Ctx is loaded", ctx);


    if (ctx) {
      if (this.chart) {
        this.chart.destroy();
      }
      this.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [
            {
              label: 'Sales',
              data: [200, 400, 300, 500, 700, 600, 800],
              borderColor: '#4caf50',
              borderWidth: 2,
              fill: false,
              tension: 0.4,
            },
          ],
        },
      });
    } else {
      console.error('Canvas element not found for the sales chart.');
    }
  }

  markAllAsRead() {
    this.unreadCount = 0;
  }

  updateTask(task: any) {
    task.completed = !task.completed;
  }

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({ name: this.newTask, completed: false });
      this.newTask = '';
    }
  }
}
