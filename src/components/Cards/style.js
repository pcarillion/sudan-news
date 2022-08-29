import styled from 'styled-components';

export const StyledCard = styled.div`

    .article-card {
        display: flex;
        flex-direction: row;
        height: 210px;
        transition: all linear 0.3s;

        .article-image {
            width: 45%;
            height: 100%;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        }

        .article-text {
            width: 55%;
            padding: 30px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            box-sizing: border-box;
            h2 {
                margin-bottom: 10px;
                font-family: 'Thasadith';
                font-size: 30px;
                color: #CC4400;
                text-align: left;
                font-weight: 700;
            }
            .article-details{
                font-size: 15px;
                font-family: 'Thasadith';
                font-weight: 300;
                color: white;
                text-align: left;
                .article-presentation {
                    max-height: 0;
                    opacity: 0;
                    transition: all linear 0.3s;
                    height: fit-content;
                }
            }
        }
    
        &:hover {
            height: 300px;
            .article-text {
                justify-content: flex-start;
                .article-details {
                    .article-presentation {
                        margin-top: 5px;
                        max-height: 1000px;
                        opacity: 1;
                    }
                }
            }
        }

    }

    &:last-child {
        margin-bottom: 150px;
    }

    &:nth-child(odd){
        .article-card {
            flex-direction: row-reverse;
        }
    }

    @media screen and (max-width: 900px) {
        .article-card {
            height: 30vh;
            .article-image {
                height: 100%;
                width: 50%;
            }
            .article-text {
                width: 50%;
                h2 {
                    font-size: 18px;
                }
                .article-presentation {
                    display: none;
                }
            }
        }
    }
`