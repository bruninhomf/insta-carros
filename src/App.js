import React, { Component } from 'react';
import api from './api';
import './App.css';

class App extends Component{

  state={
    cars: [],
  };

  async componentDidMount(){
    const response = await api.get('');

    this.setState({ cars: response.data });
  };

  render(){

     const { cars } = this.state;

    return(
      <div className="container">
        {console.log(cars)}
        {cars.map(car => (
          <div key="{car.id}" className="card">
            <img src={car.imageUrl} width="300px" className="image"/>
            <div className="details">
              <a href="#">ver detalhes</a>
            </div>
            {/* <div className="tag-details"></div> */}
            <div className="group">
              <div className="col-6">
                <h5 className="title">TEMPO RESTANTE</h5>
                <h2 className="time divider">{car.remainingTime}</h2>
              </div>
              <div className="col-6">
                <h5 className="title">ULTIMA OFERTA</h5>
                <h2 className="offer">{car.km.toLocaleString('pt-BR', { style:'currency', currency: 'BRL'})}</h2>
              </div>
            </div>
            <div className="col-12">
              <h5 className="info">{car.make} {car.model} {car.version} {car.year}</h5>
            </div>
            <div className="group-2">
              <div className="col-6">
                <h5 className="description divider">{car.year}</h5>
              </div>
              <div className="col-6">
                <h5 className="description">{car.km.toLocaleString()} KM</h5>
              </div>
            </div>
            <div className="col-12">
              <a href="#" className="btn">
                FAZER OFERTA
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  };
};

export default App;
