import styled from 'styled-components';

export const StyledNav = styled.nav`
    width: 210px;
    max-width: 210px;
    border-right: solid rgba(0, 0, 0, 0.3) 0.5px;
    height: calc(100vh - 20px);
    padding: 10px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    transition: all 0.4s linear;
    z-index: 4;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    box-sizing: border-box;
    background-color: #04101B;

    .logo-div {
        height: 77px;
        width: 120px;
        margin: 10px auto;
        transition: all 0.4s linear;
        z-index: 2;
        .main-logo {
            width: 100%;
            max-height: 100%;
    }
    .menu-icon {
        border: none;
        width: 40px;
        height: 40px;
        text-align: center;
        margin: 10px 22.5px 10px 22.5px;
        background-size: cover;
        position: fixed;
        right: 30px;
        top: 35px;
        transition: all 1s linear;
        display: none;
        &:hover {
            cursor: pointer;
        }

        .menu-icon1 {
            width: 100%;
            height: 0%;
            border-radius: 5px;
            background-color: white;
            border-top: 1px solid white;
            border-bottom: 1px solid white;
        }

        .menu-icon2 {
            width: 50%;
            height: 0%;
            margin: 7px 25%;
            border-radius: 5px;
            background-color: white;
            border-top: 1px solid white;
            border-bottom: 1px solid white;
        }

        .menu-icon3 {
            width: 100%;
            height: 0%;
            border-radius: 5px;
            background-color: white;
            border-top: 1px solid white;
            border-bottom: 1px solid white;
        }
    }
    }

    .close-btn {
        background-color: #04101B;
        color: white;
        display: inline-block;
        margin: 30px auto;
        width: 25px;
        height: 25px;
        border: 1px grey solid;
        border-radius: 90px;
        transition: all 0.2s linear;
        display: none;
    }

    .close-btn:hover {
        transform: rotate(180deg);
        cursor: pointer;
    }

    ul.menu {
        
        margin: 0;
        padding: 0;

        li {
            margin: 10px;
            font-size: 1em;
            text-align: center;
            color: white;
        }

    }

    .copyright {
        display: block;
        text-align: center;
        p {
            margin: 0;
            font-size: 0.8em;
            text-align: center;
            color: white;
        }
        .logo-dev {
            width: 30px;
            height: 30px;
            border-radius: 90px;
        }


    }

    @media screen and (max-width: 900px) {
        position: fixed;
        .menu-icon {
            display: none;
        }
        .close-btn {
            display: block;
        }
        &.closed {
            max-width: 0;
            padding: 0;
            ul.menu {
                opacity: 0;
            }
            .copyright {
                opacity: 0;
            }
            .menu-icon {
                display: block;
            }
            .close-btn {
                display: none;;
            }
        }
    }
`