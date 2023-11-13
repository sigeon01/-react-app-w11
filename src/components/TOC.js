import { Component } from "react";

class TOC extends Component {
  render() {
    var lists = [];
    var data = this.props.data;
    // <li><a href="/content/1">HTML</a></li>
    // <li><a href="/content/2">CSS</a></li>
    var i = 0;
    while (i < data.length) {
      lists.push(
        <li key={data[i].id}>
          <a
            href={"/content/" + data[i].id}
            data-id={data[i].id}
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this)}
          >
            {data[i].title}
          </a>
        </li>,
      );
      i = i + 1;
    }

    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}

export default TOC;
