import styled, { css } from 'styled-components'

const defaultColor = 'palevioletred'

export const Heading = styled.h1`
  font-size: 2em;
  color: ${defaultColor};
`

export const Label = styled.label`
  margin-bottom: 1em;
`

export const FormGroup = styled.div`
  font-size: 1em;
  margin-bottom: .5em;
`

export const Input = styled.input`
  padding: .5em;
  margin: .5em auto;
  border-radius: .2em;
  :focus, :active {
    outline: none;
  }
  transition: border .3s ease-in;
  border: 1px solid ${({ active }) => active ? defaultColor : '#eee'};
`

export const Button = styled.button`
  padding: .5em 1em;
  margin: 0 .5em .5em 0;
  border-radius: .2em;
  background: ${defaultColor};
  color: white;
  transition: background-color .3s ease-in;
  border: 1px solid ${defaultColor};

  ${({ disabled }) => !disabled && css`
    :hover {
      color: ${defaultColor};
      background: white;
      ${({ outline }) => outline && css`
        background: ${defaultColor};
        color: white;
      `}
    }
  `}

  :focus, :active {
    outline: none;
  }

  ${({ outline }) => outline && css`
    background: white;
    color: ${defaultColor};
  `}

  ${({ disabled }) => disabled && css`
    background: white;
    color: #d8d8d8;
    border: 1px solid #d8d8d8;
  `}
`

export const Hr = styled.hr`
  border: 0.5px solid ${defaultColor};
`
