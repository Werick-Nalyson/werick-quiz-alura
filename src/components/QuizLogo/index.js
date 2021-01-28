import styled from 'styled-components';

import React from 'react';
import PropTypes from 'prop-types';

const DivLogo = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  span {
    font-size: 30px;
    margin-left: 5px;
  }
`

const ImgLogo = styled.img`
  width: 80px;
  /* margin: auto; */
  /* display: block; */
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default function QuizLogo() {
  return (
    <DivLogo>
      <ImgLogo className="logo" src="https://ik.imagekit.io/wericknalyson/Images_portfolio/logo_x5cc44G_h.png" alt="" />
      <span>
        <strong>
          ERICK N. QUIZ
        </strong>
      </span>
    </DivLogo>
  );
}