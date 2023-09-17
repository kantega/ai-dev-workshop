const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// setup
const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const PORT = 3000;

// models
const tasks = ['an example task', 'another example task'];
const completed = ['a completed task'];
const completeTask = (task) => {
    completed.push(task);
    tasks.splice(tasks.indexOf(task), 1);
};

// routes
const router = express.Router();

router.get('/', function (req, res) {
    res.render('index', { tasks: tasks, completed: completed });
});

router.post('/addtask', function(req, res) {
    const newTask = req.body.newTask;
    tasks.push(newTask);
    res.redirect('/');
});

router.post('/removetask', function(req, res) {
    const completedTask = req.body.checkedTask;
    if (typeof completedTask === 'string') {
        completeTask(completedTask);
    } else if (completedTask === 'object') {
        for (let i = 0; i < completedTask.length; i++) {
            completeTask(completedTask[i]);
        }
    }
    res.redirect('/');
});

app.use('/', router);

app.listen(PORT, function () {
    console.log(`Application listening on port ${PORT}`);
});