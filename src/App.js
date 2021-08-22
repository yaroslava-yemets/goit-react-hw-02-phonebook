import React, {Component} from 'react';

class App extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleNameChange = (evt) => {
    this.setState({
      name: evt.currentTarget.value,
    });
  };

  handleNumberChange = (evt) => {
    this.setState({
      number: evt.currentTarget.value,
    });
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <form>
          <label>
          Name
            <input
              value={this.state.name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              onChange={this.handleNameChange}
            />
          </label>

          <label>
            Number
            <input
              value={this.state.number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              onChange={this.handleNumberChange}
            />
          </label>
          <button
            type="button"

          >
            Add contact
          </button>

        </form>

        <div>
          <h2>Contacts</h2>
          <ul>
            <li>Yaroslava</li>
          </ul>
        </div>
      </div>
    )}
}

export default App;
