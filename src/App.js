import React, { Component } from 'react';
import './App.css';
import UserOutput from './components/UserOutput/UserOutput';
import UserInput from './components/UserInput/UserInput';

class App extends Component {
  state = {
    username: 'React',
    characters: [{
        id: 1,
        username: 'Doc',
        paragraph: 'Please, Marty, do not tell me, no man should know too much about their own destiny. Marty, that is completely out of the question, you must not leave this house.you must not see anybody or talk to anybody.Anything you do could have serious reprocautions on future events.Do you understand ? Do not worry, I will take care of the lightning, you take care of your pop.By the way, what happened today, did he ask her out ? Well maybe you are and you just do not know it yet. Let me show you my plan for sending you home. Please excuse the crudity of this model, I did not have time to build it to scale or to paint it.'
      },
      {
        id: 2,
        username: 'Marty',
        paragraph: 'Doc. My insurance, it is your car, your insurance should pay for it. Hey, I wanna know who is gonna pay for this ? I spilled beer all over it when that car smashed into me. Who is gonna pay my cleaning bill ? Unfortunately no, it requires something with a little more kick, plutonium. Really.No wait, Doc, the bruise, the bruise on your head, I know how that happened, you told me the whole story.you were standing on your toilet and you were hanging a clock, and you fell, and you hit your head on the sink, and that is when you came up with the idea for the flux capacitor, which makes time travel possible.'
      }
    ],
    showCharacters: false,
    textButton: 'Mostrar'
  }

  /* Muestra y oculta parrafos */
  toggleParagraphsHandler = () => {
    const doesShow = this.state.showCharacters;
    const stringBtn = doesShow ? 'Mostrar' : 'Ocultar'
    this.setState({ showCharacters: !doesShow, textButton: stringBtn });
  }

  usernameChangedHandler = (event) => {
    const name = event.target.value ? event.target.value : 'React';
    this.setState({ username: name });
  }


  render() {
   let paragraphs = null;

    if( this.state.showCharacters ){
      paragraphs = (
        <div>
          {this.state.characters.map((character, index) => { //dos parrafos
            return <UserOutput key= {index} username={character.username} paragraph={character.paragraph} />
          })}
        </div>
      );
    }


    return (
        <div className = "App">
          <h1>Hola {this.state.username} </h1>
          <UserInput changed={(event) => this.usernameChangedHandler(event)} />
          <button onClick={this.toggleParagraphsHandler}>{this.state.textButton}</button>
          {paragraphs}
        </div>
    );
  }
}

export default App;
