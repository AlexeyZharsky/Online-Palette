import React, { useState } from 'react';
import Content from './Content'
import Slider from 'react-input-slider';

const ColorSlider = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const rgbColor = `rgb(${red}, ${green}, ${blue})`;

  const changeColor = (r,g,b) => {
    setRed(r);
    setGreen(g);
    setBlue(b);
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(rgbColor).then(() => {
      alert('Цвет скопирован в буфер обмена');
    }, (err) => {
      console.error('Ошибка копирования цвета:', err);
    });
  };

  const randomizeColor = () => {
    setRed(Math.floor(Math.random() * 255));
    setGreen(Math.floor(Math.random() * 255));
    setBlue(Math.floor(Math.random() * 255));
  }

  return (
    <div className='container'>
      <div className='header'>
        <h1>Цветовая палитра</h1>
        <button onClick={randomizeColor}>Подобрать рандомный цвет</button>
      </div>

      <div className='palette-section'>
        <div className='sliders'>
          <h3>Красный</h3>
          <Slider axis="x" xstep={1} xmin={0} xmax={255} x={red} onChange={({ x }) => setRed(x)} />
          <h3>Зелёный</h3>
          <Slider axis="x" xstep={1} xmin={0} xmax={255} x={green} onChange={({ x }) => setGreen(x)} />
          <h3>Синий</h3>
          <Slider axis="x" xstep={1} xmin={0} xmax={255} x={blue} onChange={({ x }) => setBlue(x)} />
          <div style={{ backgroundColor: rgbColor, width: '200px', height: '200px', margin: '20px', border: '1px solid lightgray'}}></div>
        </div>
        <div className='color-set'>
          <button className='color-button' onClick={() => changeColor(0, 255, 255)}>Циан</button>
          <button className='color-button' onClick={() => changeColor(255, 0, 255)}>Маджента</button>
          <button className='color-button' onClick={() => changeColor(255, 165, 0)}>Оранжевый</button>
          <button className='color-button' onClick={() => changeColor(128, 0, 128)}>Фиолетовый</button>
          <button className='color-button' onClick={() => changeColor(255, 20, 147)}>Розовый</button>
          <button className='color-button' onClick={() => changeColor(75, 0, 130)}>Тёмно-синий</button>
          <button className='color-button' onClick={() => changeColor(143, 188, 139)}>Хаки</button>
          <button className='color-button' onClick={() => changeColor(0, 128, 0)}>Тёмно-зелёный</button>
          <button className='color-button' onClick={() => changeColor(70, 130, 180)}>Стальной синий</button>
          <button className='color-button' onClick={() => changeColor(210, 180, 140)}>Хаки светлый</button>
          <button className='color-button' onClick={() => changeColor(189, 183, 107)}>Хаки тёмный</button>
          <button className='color-button' onClick={() => changeColor(255, 215, 0)}>Лаймовый</button>
          <button className='color-button' onClick={() => changeColor(173, 216, 230)}>Светло-синий</button>
          <button className='color-button' onClick={() => changeColor(240, 255, 240)}>Светло-зелёный</button>
          <button className='color-button' onClick={() => changeColor(245, 245, 220)}>Бежевый</button>
          <button className='color-button' onClick={() => changeColor(250, 235, 215)}>Антракот</button>
          <button className='color-button' onClick={() => changeColor(255, 248, 220)}>Кремовый</button>
          <button className='color-button' onClick={() => changeColor(255, 250, 205)}>Лимонно-кремовый</button>
          <button className='color-button' onClick={() => changeColor(255, 235, 205)}>Лососевый</button>
          <button className='color-button' onClick={() => changeColor(240, 230, 140)}>Песочный</button>
          <button className='color-button' onClick={() => changeColor(255, 240, 245)}>Розовый светлый</button>
          <button className='color-button' onClick={() => changeColor(245, 255, 250)}>Голубой светлый</button>
          <button className='color-button' onClick={() => changeColor(230, 230, 250)}>Лавандовый светлый</button>
          <button className='color-button' onClick={() => changeColor(220, 220, 220)}>Серый</button>
          <button className='color-button' onClick={() => changeColor(169, 169, 169)}>Серый тёмный</button>
          <button className='color-button' onClick={() => changeColor(211, 211, 211)}>Светло-серый</button>
          <button className='color-button' onClick={() => changeColor(192, 192, 192)}>Серебристый</button>
          <button className='color-button' onClick={() => changeColor(105, 105, 105)}>Серый средний</button>
        </div>
        
      </div>

      <div className='color-info'>
        <h3>Выбранный вами цвет: {rgbColor}</h3>
        <button onClick={copyToClipboard}>Копировать цвет</button>
      </div>

      <Content />
    </div>
  );
};

export default ColorSlider;