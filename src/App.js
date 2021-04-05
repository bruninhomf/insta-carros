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

      function time_convert(num) { 
        // var num = 790968;
        var data = new Date(num * 1617494400);
        var falta = (new Date(data).getTime() - new Date().getTime()) / 1000;
        var segundos = Math.round(falta % 60);
        var minutos = Math.round(falta / 60 % 60);
        var horas = Math.round(falta / 60 / 60 % 24);
        var dias = Math.round(falta / 60 / 60 / 24);
        var divs = document.querySelectorAll('#parcelas span');

        setInterval(function () {
        if (segundos == 0) {
            segundos = 60;
            minutos--;
        }
        if (minutos == 0) {
            minutos = 60;
            horas--;
        }
        if (horas == 0) {
            horas = 24;
            dias--;
        }
        segundos--;
        // var contador = [horas, minutos, segundos].forEach(function (parcela, i) {
        //     divs[i].innerHTML = parcela;
        // });
        var contador = horas + ':' + minutos + ':' + segundos;
        
        return document.getElementById("demo").innerHTML = contador;

        }, 1000);
      }

      console.log(time_convert(790968))


    return(
      <div className="container">
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
                <h2 className="time divider">
                  <div id="demo"></div>
                  {console.log(time_convert(car.remainingTime))}
                  {/* {car.remainingTime} */}
                  {/* {time_convert(790968)} */}
                </h2>
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
