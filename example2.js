/**
 * Created by arron on 5/15/17.
 */
function TodoList({todos, onSetTodoStatus}) {
    console.log(todos);
    return (
        <ul>
            {todos.map(todo =>
                <li key={todo.id}>
                    <label>
                        <input type="checkbox" checked={todo.isCompleted} onChange={e => onSetTodoStatus(todo, e.target.checked)} />
                        {todo.isCompleted
                            ?<del>{todo.text}</del>
                            : todo.text
                        }
                    </label>
                </li>
            )}
        </ul>
    )
}

class TodoForm extends React.Component {
    constructor(props){
        super(props);

        this_onSubmit = this._onSubmit.bind(this);
    }

    render() {
        return (
            <form onSubmit={this._onSubmit}>
                <input type="text" ref={ input =>this._todoText = input } />
                <button>Add Todo</button>
            </form>
        );
    }

    _onSubmit(e) {
        e.preventDefault();


    }
}

class AppComponent extends React.Component {

    constructor(props) {
        super(props);

        this._nextTodoId = 1;
        this.state = {
            filter: {
                showCompleted: true
            },
            todos: [
                {id: this._nextTodoId++, text: "hey!", isCompleted: false },
                {id: this._nextTodoId++, text: "fdsaey!", isCompleted: true },
                {id: this._nextTodoId++, text: "yeah!", isCompleted: true },
                {id: this._nextTodoId++, text: "lindsey lohan!", isCompleted: false }
            ]
        };

        this._onShowCompletedChanged = this._onShowCompletedChanged.bind(this);
        this._setTodoStatus = this._setTodoStatus.bind(this);
    }

    render() {

        const {filter, todos} = this.state;

        const filteredTodos = filter.showCompleted
            ? todos
            : todos.filter(todo => !todo.isCompleted);

        return (
            <div>
                <h2>Todo LIST</h2>
                <label>
                    <input type="checkbox"
                           checked={filter.showCompleted}
                           onChange={this._onShowCompletedChanged} /> Show Completed
                </label>
                <TodoList todos={filteredTodos} onSetTodoStatus={this._setTodoStatus} />
            </div>
        )

    }


    _setTodoStatus(todo, isCompleted) {
        console.log(this);
        const {todos} = this.state;

        const newTodos = todos.map(oldTodo => {
            if(oldTodo.id !== todo.id)
                return oldTodo;

            return Object.assign({}, oldTodo, {isCompleted})
        });

        this.setState({
            todos: newTodos
        });
    }

    _onShowCompletedChanged(e) {
        this.setState({
            filter: {showCompleted: e.target.checked}
        })
    }
}


ReactDOM.render(<AppComponent/>, document.getElementById("application"));