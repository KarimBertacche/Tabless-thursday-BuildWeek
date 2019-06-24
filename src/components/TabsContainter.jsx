import React from 'react';
import styled from 'styled-components';

const StylesTabsContainer = styled.section`
    padding: 20px;

    .card-wrapper {
        position: relative;
        width: 230px;
        height: 300px;
        perspective: 150rem;
        
        .side {
            position: absolute;
            width: 100%;
            height: 100%;
            border: 3px solid red;
            border-radius: 10px;
            transition: all 1s ease-in-out;

            &.back-side {
                transform: rotateY(180deg);
            }
        }

        &:hover .front-side {
            transform: rotateY(-180deg);
        }

        &:hover .back-side {
            transform: rotateY(0);
        }
    }

`;

export default function TabsContainer() {
    return (
        <StylesTabsContainer>
            <div className="card-wrapper">
                <div className="side front-side">
                    FRONT
                </div>
                <div className="side back-side">
                    BACK
                </div>
            </div>
        </StylesTabsContainer>
    );
}