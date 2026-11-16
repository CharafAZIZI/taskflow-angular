
import { TestBed } from '@angular/core/testing';
import { TaskList } from './task-list';

describe('TaskList', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskList]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(TaskList);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should display three tasks initially', () => {
    const fixture = TestBed.createComponent(TaskList);

    expect(fixture.componentInstance.tasks.length).toBe(3);
  });

  it('should clear all tasks', () => {
    const fixture = TestBed.createComponent(TaskList);
    const component = fixture.componentInstance;

    component.clearTasks();

    expect(component.tasks.length).toBe(0);
  });

  it('should restore tasks', () => {
    const fixture = TestBed.createComponent(TaskList);
    const component = fixture.componentInstance;

    component.clearTasks();
    component.restoreTasks();

    expect(component.tasks.length).toBe(3);
  });
});
