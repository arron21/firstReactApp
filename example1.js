/**
 * Created by arron on 5/15/17.
 */
class AppComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 5, title: "Hello World" };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    render() {
        const { count, title } = this.state;
        return (
            <section className="site-wrap">
                <h1>Header { title }</h1>
                <p>counter: {count}</p>
                <div>
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.decrement}>-</button>
                </div>
            </section>
        );
    }


    increment() {
        console.log("INC");
        const {count} = this.state;
        this.setState({count: count + 1});
    }

    decrement() {
        console.log("DEC");
        const {count} = this.state;

        this.setState({count: count - 1});

    }
}

ReactDOM.render(
    <AppComponent/>,
    document.getElementById("application"));