var TodoList = React.createClass({
  render: function() {
    var createItem = function (item) {
      return (
        <li key={item.id} onClick={this.props.onMark} className="pure-menu-item">
          {item.text} <span onClick={this.props.onDel} className="del-btn">x</span>
        </li>
      );
    }
    return (
      <div className="TodoList pure-menu">
        <ol className="pure-menu-list">
          {this.props.items.map(createItem, this)}
        </ol>
      </div>
    );
  }
});

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      items: [],
      text: ''
    };
  },
  onChange: function (e) {
    this.setState({
      text: e.target.value
    });
  },
  markDone: function (e) {
    var $this = $(e.target);
    // console.log($this);
    if( $this.hasClass('done') ) {
      $this.removeClass('done');
    } else {
      $this.addClass('done');
    }
    console.log('mark done');
  },
  delTodo: function (e) {
    var $this = $(e.target);
    var $li = $this.parent("li.pure-menu-item");
    var key = $li.attr('key');
    var currentItems= this.state.items;
    currentItems.filter(function (key) {
      return function(el) {
      console.log("el"+el.id)
      console.log("elk"+key)
        return el.id !== key;
      }
    });
    console.log(currentItems)
    this.setState({
      items: currentItems,
      text: ''
    });
    console.log('deleted');
  },
  addTodo: function (e) {
    e.preventDefault();
    var itemText = this.state.text;
    if( ! itemText.length)  {
      alert('field is empty');
      return;
    }
    var currentItems= this.state.items;
    currentItems.push({
      text: itemText,
      id: Date.now()
    });
    
    this.setState({
      items: currentItems,
      text: ''
    });
    console.log('item added');
  },
  render: function() {
    return (
      <div>
        <h3>React To-Do</h3>
        <form onSubmit={this.addTodo} className="pure-form">
          <fieldset>
            <input onChange={this.onChange} value={this.state.text} />
            &nbsp;
            <button type="submit" className="pure-button pure-button-primary">{'Add #' + (this.state.items.length+1)}</button>
          </fieldset>
        </form>
        <TodoList items={this.state.items} onMark={this.markDone} onDel={this.delTodo} />
      </div>
    );
  }
});

ReactDOM.render(
  <TodoApp />,
  document.getElementById('container')
);