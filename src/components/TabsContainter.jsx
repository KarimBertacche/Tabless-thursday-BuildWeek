import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import uuid from 'uuid';

import TabCard from './TabCard';

const StylesTabsContainer = styled.section`
    display: flex;
    justify-content: space-evenly;
    align-content: space-between;
    flex-wrap: wrap;
    height: 100%;
    padding: 20px;
    overflow: scroll;

    .add-wrapper {
        width: 230px;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 3px solid red;
        border-radius: 10px;
        cursor: pointer;
        text-decoration: none;
        margin-bottom: 10px;

        span {
            font-size: 14rem;
            font-weight: lighter;
        }

        &:hover span {
            color: red;
        }
    }
`;

const TabsContainer = props => {
    return (
        <StylesTabsContainer>
            <Link to="/home/new" className="add-wrapper" >
                <span>+</span>
            </Link>
                {
                    // props.tabs !== null
                    props.tabs.map(tab => {
                            console.log(tab)
                            return  <TabCard 
                                        {...props}
                                        key={uuid()}
                                        username={tab.username}
                                        title={tab.title}
                                        description={tab.description}
                                        website={tab.website}
                                        tabId={tab.tab_id}
                                        tabs={props.tabs}
                                         /> 
                        })

                }
        </StylesTabsContainer>
    );
}

const mapStateToProps = state => {
    return {
        tabs: state.tabs
    }
}

export default connect(mapStateToProps)(TabsContainer);