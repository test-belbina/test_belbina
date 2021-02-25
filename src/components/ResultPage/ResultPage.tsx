import React from "react";
import { Redirect } from 'react-router-dom';
import RoleBlock from './RoleBlock/RoleBlock';
import styled from "styled-components";
import useCustomSelector from "src/hooks/useCustomSelector";
import { questionState } from 'src/store/rootSelector';
import useCustomDispatch from 'src/hooks/useCustomDispatch';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import Box from "@material-ui/core/Box";
import InstagramIcon from '@material-ui/icons/Instagram';
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import * as packageJson from "../../../package.json";

import { roles, keys } from '../../text/roles';
import { resetQuestions } from 'src/store/questions/actions';

// images
import topStripe from '../../assets/ResultPage/topStripe.svg';
import rightStripe from '../../assets/ResultPage/rightStripe.svg';
import styleClasses from './resultPage.module.css';

export default function ResultPage() {


    const questionsRate = useCustomSelector(questionState);
    const dispatch = useCustomDispatch();

    const useStyles = makeStyles({
        tableContainer: {
            maxWidth: 450,
            marginBottom: "1em",
        },
        instagramIcon: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            borderRadius: 3,
            border: 0,
            color: 'white',
            height: 48,
            padding: '0 30px',
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            fontWeight: 700,
            marginTop: '10px'
          },
    });

    const classes = useStyles();

    // формируем сколько очков набрала каждая категория
    let updatedRoles: any = {
        ...roles
    };
    for(const role in updatedRoles) {
       updatedRoles[role] = keys[role].reduce((acc: any, val: any) => {
        const pageId = val[0];
        const questionId = val[1];
            return acc + questionsRate[pageId][questionId];
       }, 0);
    };
    console.log(updatedRoles);

    // ищем топ всех ролей
    let array = [];
    for( const role in updatedRoles ) {
        array.push(updatedRoles[role]);
    }
    array = array.sort((a, b) => a - b);

    const arrayLength = array.length;

    let topRoles = [];
    for (let i = 0; i < arrayLength; i++) {
        const rate: any = array.pop();
        const category = Object.keys(updatedRoles).filter(function(key) {return updatedRoles[key] === rate});
        for (let j = 0 ; j <= category.length; j++ ) {
            topRoles.push({
                category: category[j],
                rate: rate
            });
            updatedRoles[category[i]] = -100;
            array = array.filter(el => el !== rate);
        }
    }
    for(const role in topRoles) {
        if (topRoles[role].category === undefined || topRoles[role].rate === undefined ) {
          delete topRoles[role];
        }
    }

    const sumAllValue = topRoles.reduce((sum: any, role: any) => sum + role.rate, 0);
    if (sumAllValue < 70) {
        return (
            <Redirect to="/" />
        );  
    }

    // main value
    let mainValue: any;
    for(let value in topRoles) {
        if ( topRoles[value].category !== undefined && topRoles[value].rate !== undefined && value !== undefined) {
            mainValue = topRoles[value];
            break;
        }
    }
    // supported value
    let supportedValue: any;
    if (mainValue !== undefined) {
        for(let value in topRoles) {
            if ( topRoles[value].category !== undefined && topRoles[value].rate !== undefined && value !== undefined && topRoles[value].category !== mainValue.category) {
                supportedValue = topRoles[value];
                break;
            }
        }
    }
    // the smallest value
    let smallest : any;
    let exsmallest : any;
    for(let value in topRoles) {
        if ( topRoles[value].category !== undefined && topRoles[value].rate !== undefined && value !== undefined) {
            exsmallest = smallest;
            smallest = topRoles[value];
        }
    }


        return (
            <>
            {/* images bg */}
            <img 
                src={topStripe}
                alt=""
                className={styleClasses.topStripe}
            />
            <img 
                src={rightStripe}
                alt=""
                className={styleClasses.rightStripe}
            />

            <div className={styleClasses.main}>
                <h1>
                    Результат теста
                </h1>
                <h2>
                    Ваши сильные роли
                </h2>
                <div style={{
                    width: '100%',
                    maxWidth: '1200px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: window.innerWidth > 900 ? 'space-between' : 'center',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }}>
                    <RoleBlock 
                        src={roles[mainValue.category].image}
                        roleClass={'first'}
                        name={mainValue.category}
                        haracteristic={roles[mainValue.category].haracteristic}
                        weakness={roles[mainValue.category].weakness}
                        functionality={roles[mainValue.category].functionality}
                    />
                    <RoleBlock 
                        src={roles[supportedValue.category].image}
                        roleClass={'second'}
                        name={supportedValue.category}
                        haracteristic={roles[supportedValue.category].haracteristic}
                        weakness={roles[supportedValue.category].weakness}
                        functionality={roles[supportedValue.category].functionality}
                    />
                </div>
                <h2>
                    Ваша слабая роль
                </h2>
                <div style={{
                    width: '100%',
                    maxWidth: '1200px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    flexDirection: 'row'
                }}>
                    <RoleBlock 
                        src={roles[smallest.category].image}
                        roleClass={'third'}
                        name={smallest.category}
                        haracteristic={roles[smallest.category].haracteristic}
                        weakness={roles[smallest.category].weakness}
                        functionality={roles[smallest.category].functionality}
                    />
                </div>

                <h4>
                    Таблица с процентным соотношением прочих ролей
                </h4>
            </div>
            

            <div 
            style={{ 
                padding: '1em', 
                paddingBottom: '4em',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
            >
                <TableContainer component={Paper} className={classes.tableContainer}>
                    <Table size="small">
                        <TableBody>
                            {topRoles.map((role, index) => (
                                <TableRow key={"role" + index}>
                                    <TableCell>
                                        {role.category === mainValue.category &&
                                        (<Gradient2>
                                            {role.category}
                                        </Gradient2>)
                                        }
                                        {role.category === supportedValue.category &&
                                        (<Gradient2>
                                            {role.category}
                                        </Gradient2>)
                                        }
                                        {role.category !== supportedValue.category && role.category !== mainValue.category && 
                                        role.category
                                        }
                                        </TableCell>
                                    <TableCell 
                                    align="right">
                                        {role.category === mainValue.category &&
                                        <Gradient2>
                                            {Math.round((role.rate * 100) / sumAllValue)}%
                                        </Gradient2>
                                        }
                                        {role.category === supportedValue.category &&
                                        <Gradient2>
                                            {Math.round((role.rate * 100) / sumAllValue)}%
                                        </Gradient2>
                                        }
                                        {role.category !== supportedValue.category && role.category !== mainValue.category &&
                                        Math.round((role.rate * 100) / sumAllValue) + '%'
                                        }
                                    </TableCell>
                                    <TableCell 
                                    align="right">
                                        {role.category === mainValue.category &&
                                        <Gradient2>
                                            {role.rate} (б)
                                        </Gradient2>}
                                        {role.category === supportedValue.category &&
                                        <Gradient2>
                                            {role.rate} (б)
                                        </Gradient2>}
                                        {role.category !== supportedValue.category && role.category !== mainValue.category &&
                                        role.rate + '(б)'}
                                        </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div style={{ 
                    margin: '20px 0',
                    padding: '10px 0',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                    }}>
                    <p style={{
                        fontStyle: 'italic',
                        fontSize: '15px',
                        fontWeight: 'normal',
                        lineHeight: '1.3',
                        maxWidth: '500px',
                        textAlign: 'center'
                    }}>
                        Вот результаты теста, дальше как с этим взаимодействовать, получи инструкцию в личных сообщениях от Яна. Делай скриншот, выкладывай у себя в сторис в Инстаграм, отмечай Яна <Bold>@yanpalm</Bold> и получи короткую консультацию.
                    </p>
                        <Button
                        onClick={() => window.open('https://www.instagram.com/', '_blank')}
                        variant="contained"
                        color="secondary"
                        size="medium"
                        style={{fontSize: '13px'}}
                        className={classes.instagramIcon}
                        startIcon={<InstagramIcon />}
                        >
                            Поделиться
                        </Button>
                </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '40px' }}>
                            <Button
                            variant="contained"
                            color="primary"
                            onClick={() => {
                                dispatch(resetQuestions());
                                window.location.href = packageJson.homepage;
                                }
                            }
                            >
                                Пройти тест заново
                            </Button>
                        </div>
            </div>
            {/* <WrapperControlPanel 
                style={{ 
                    textAlign: 'center', display: 'flex', 
                    flexDirection: 'column', alignItems: 'center', 
                    padding: '15px', boxSizing: 'border-box'
            }}>
                <Button
                    variant="contained"
                    color="primary"
                    style={{ width: '300px' }}
                    onClick={() => window.open('https://www.instagram.com/yanpalm/', '_blank')}
                >
                            Перейти в Инстаграм Яна
                </Button>
            </WrapperControlPanel> */}
        </>
        );
}


const Bold = styled.strong`
    font-weight: bold;
`;

const Gradient1 = styled(Bold)`
    background: -webkit-linear-gradient(45deg, #09009f, #00ff95 80%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
`;

const Gradient2 = styled(Bold)`
    background: linear-gradient(to right, #ad1457, #4a148c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
`;

const WrapperControlPanel = styled.div`
    display: flex;
    position: fixed;
    bottom: 0;
    justify-content: center;
    padding: 1em 0;
    min-height: 2em;
    width: 100%;
    z-index: 10000;
    max-width: 935px;
    background-color: #fff;
    border-top: 2.5px solid #3c0068;
    box-shadow: 0 -20px 8px -2px rgba(0, 0, 0, .1);
`;
