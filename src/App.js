import React, { Component } from 'react';
import './App.css';
import UserOutput from './components/UserOutput/UserOutput';
import UserInput from './components/UserInput/UserInput';

class App extends Component {
  state = {
    username: 'REACT',
    characters: [{
        username: 'Emmet Brown',
        image: '../doc.jpg',
        paragraph: 'Please, Marty, do not tell me, no man should know too much about their own destiny. Marty, that is completely out of the question, you must not leave this house.you must not see anybody or talk to anybody.Anything you do could have serious reprocautions on future events.Do you understand ?'
      },
      {
        username: 'Marty McFly',
        image: '../marty.jpg',
        paragraph: 'No wait, Doc, the bruise, the bruise on your head, I know how that happened, you told me the whole story.you were standing on your toilet and you were hanging a clock, and you fell, and you hit your head on the sink, and that is when you came up with the idea for the flux capacitor, which makes time travel possible.'
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
          <div className="col-8 d-flex align-items-center justify-content-center">
            {this.state.characters.map((character, index) => { //dos parrafos
              return <UserOutput key= {index} username={character.username} image={character.image} paragraph={character.paragraph} />
            })}
          </div>
      );
    }else{
      paragraphs = (
        <div className="col-12 col-xl-8 col-lg-8 d-flex flex-column align-items-center justify-content-center">
              <img src="../delorean.jpg" alt="delorean" />
              <h3>Cards no disponibles</h3>
          </div>
      );
    }


    return (
      <div className= "App row-eq-height mt-4 border p-3 d-flex flex-column flex-lg-row flex-xl-row rounded">
        <div className="col-12 col-xl-4 col-lg-4 d-flex flex-column  align-items-center justify-content-center">
            <h1 className="d-block text-truncate w-100">Hola {this.state.username.toUpperCase()} </h1>
            <UserInput changed={(event) => this.usernameChangedHandler(event)} />
            <button className="btn btn-primary" onClick={this.toggleParagraphsHandler}>{this.state.textButton}</button>
          </div>
        {paragraphs}
        </div>
    );
  }
}

export default App;
