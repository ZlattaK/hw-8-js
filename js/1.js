"use strict";

let html = document.documentElement;
html.setAttribute('lang', 'en');

let meta = document.createElement('meta');
meta.setAttribute('charset', 'UTF-8');
document.head.append(meta);

let title = document.createElement('title');
title.innerHTML = 'Choose Your Option';
document.head.append(title);

let style = document.createElement('style');
document.head.append(style);

let wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);

let h1 =  document.createElement('h1');
h1.innerHTML = 'Choose Your Option';
wrapper.appendChild(h1);

let p = document.createElement('p');
p.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
p.classList.add('title-text');
wrapper.append(p);

let divMain = document.createElement('div');
divMain.classList.add('block');
wrapper.append(divMain);

//left

let divLeft = document.createElement('div');
divLeft.classList.add('block__inner', 'block-left');
divMain.append(divLeft);

let spanLeft = document.createElement('span');
spanLeft.innerHTML = 'freelancer';
spanLeft.classList.add('block__subtitle');
divLeft.append(spanLeft);

let h2Left = document.createElement('h2');
h2Left.innerHTML = 'Initially designed to';
h2Left.classList.add('block__title');
divLeft.append(h2Left);

let pLeft = document.createElement('p');
pLeft.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
pLeft.classList.add('block__text');
divLeft.append(pLeft);

let buttonLeft = document.createElement('button');
buttonLeft.innerHTML = 'start here';
buttonLeft.classList.add('block__button');
divLeft.append(buttonLeft);

//Right

let divRight = document.createElement('div');
divRight.classList.add('block__inner');
divMain.append(divRight);

let spanRight = document.createElement('span');
spanRight.innerHTML = 'studio';
spanRight.classList.add('block__subtitle');
divRight.append(spanRight);

let h2Right = document.createElement('h2');
h2Right.innerHTML = 'Initially designed to';
h2Right.classList.add('block__title');
divRight.append(h2Right);

let pRight = document.createElement('p');
pRight.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
pRight.classList.add('block__text');
divRight.append(pRight);

let buttonRight = document.createElement('button');
buttonRight.innerHTML = 'start here';
buttonRight.classList.add('block__button');

divRight.append(buttonRight);



style.innerHTML = `
        @import url('https://fonts.googleapis.com/css2?family=Arvo&family=Montserrat:wght@700&family=Open+Sans&family=Roboto:wght@400;700&family=Work+Sans&display=swap');

        *, *::after, *::before {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }

        body {
            background-color: #9DA1AA;
        }

        .wrapper {
            max-width: 1280px;
            margin: 30px auto;
            padding: 120px 240px 139px;
            background-color: #ffff;
        }

        h1 {
            color: #212121;
            font-family: Arvo;
            font-size: 36px;
            font-style: normal;
            font-weight: 400;
            line-height: 48px;
            text-align: center;
            padding-bottom: 5px;
        }

        .title-text {
            color: #9FA3A7;
            text-align: center;
            font-family: OpenSans;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 26px;
            padding-bottom: 56px;
        }

        .block {
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 5px;
            border: 1px solid #E8E9ED;
        }

        .block__inner {
            padding: 81px 96px 85px 94px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .block-left {
            border-right: 1px solid #E8E9ED;
        }

        .block__subtitle {
            margin-bottom: 19px;
            color: #9FA3A7;
            text-align: center;
            font-family: Montserrat;
            font-size: 12px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            letter-spacing: 2.4px;
            text-transform: uppercase;
        }

        .block__title {
            margin-bottom: 25px;
            color: #212121;
            text-align: center;
            font-family: Arvo;
            font-size: 36px;
            font-style: normal;
            font-weight: 400;
            line-height: 46px;
        }

        .block__text {
            margin-bottom: 58px;
            color: #9FA3A7;
            text-align: center;
            font-family: OpenSans;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 22px;
        }

        .block__button {
            padding: 15px 10px;
            width: 147px;
            text-align: center;
            font-family: Montserrat;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 2.4px;
            text-transform: uppercase;
            border-radius: 25px;
            border: 2px solid #FFC80A;
            background-color: #ffff;
            cursor: pointer;
        }

        .block__inner:hover {
            background-color: #8F75BE;
        }

        .block__inner:hover .block__subtitle {
            color: #FFC80A;
        }

        .block__inner:hover .block__title {
            color: #FFF;
        }

        .block__inner:hover .block__text {
            color: #FFF;
        }

        .block__inner:hover .block__button {
            color: #FFF;
            background-color: #8F75BE;
        }


















`



