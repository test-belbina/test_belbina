import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useCustomSelector from "src/hooks/useCustomSelector";
import useCustomDispatch from 'src/hooks/useCustomDispatch';
import { Link as RouterLink } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { QuestionCircle as InfoIcon } from "@styled-icons/bootstrap/QuestionCircle";
import IconButton from "@material-ui/core/IconButton";

import { questions, questionLength } from '../../text/questions';
import { questionState } from 'src/store/rootSelector';
import { setValue } from 'src/store/questions/actions';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import sclasses from './testPage.module.css';

const sliderTheme = createMuiTheme({
    overrides: {
        MuiSlider: {
            thumb: {
                color: "#5850F1",
            },
            track: {
                color: "#5850F1",
            },
            rail: {
                color: "#5850F1",
            },
        },
    },
})

const buttonTheme = createMuiTheme({
    overrides: {
        MuiButton: {
            containedPrimary: {
                backgroundColor: "#5850F1",
            }
        }
    }
})

const useStyles = {

    instructionsText: {
        fontSize: "1em",
        lineHeight: 1.1,
    },
    violet: {
        "& .MuiSlider-markLabelActive": {
            color: '#25006e',
            fontWeight: '700'
        }
    },
    instruction: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px solid #3c0068',
        backgroundColor: '#fffacd',
        borderRadius: '15px',
        padding: '0',
        marginTop: '5px',
        overflow: 'hidden',
        maxHeight: 'auto',
        transition: 'max-height 2s, padding 0.5s, border 0.5s'
    },
    instructionOpened: {
        maxHeight: 'auto',
        border: '2px solid #3c0068',
        padding: '10px',
        paddingBottom: '8px',
    },
    instructionClosed: {
       maxHeight: '0',
       padding: '0',
       border: 'none'
    }
};

function TestPage( props: any ) {

    const [ blockId, setBlockId ] = useState(0);
    const [openInfo, setOpenInfo] = useState(false);
    const [ instrcutionModal, setInstructionModal ] = useState(false);

    const { classes } = props;

    const questionsRate = useCustomSelector(questionState);
    const dispatch = useCustomDispatch();

    useEffect(() => {
        const blockId = props.match.params.idBlock;
        setBlockId(blockId - 1);
    });

    useEffect(() => {
        setInstructionModal(false);
    }, [props.location])

    const currentQuestions = questions[blockId];
    const sumValueQuestions = questionsRate[blockId].reduce((acc: any, val: any) => acc + val, 0);
    const possibleMaximumValueQuestion = 10 - sumValueQuestions;

    const handleChangeQuestion = (value: any, id: any) => {
            dispatch(setValue(id, blockId, value)); 
    };

        return (
            <>
            <div className={sclasses.Main} style={ blockId === 0 ? {} : { paddingTop: 0 } }>
                {blockId === 0 && <>

                    <Typography
                        align={'center'}
                        component="h3"
                        className={sclasses.testBelbLabel} >
                        Определи свою роль в команде!
                    </Typography>

                    <Typography
                        align='center'
                        component="h1"
                        className={sclasses.testBelbLabel} >
                        Тест Белбина
                    </Typography>
                    
                    <Typography
                        component="section"
                        className={sclasses.instructionsText}
                    >
                        <p style={{marginTop: '16px'}}>В каждой из семи частей данного теста распределите 10 баллов между 8 утверждениями. Если вы согласны с каким-либо утверждением на все 100%, вы можете отдать ему все 10 баллов.</p>
                        <br/>
                        <p>Рекомендуем распределять баллы 5/3/2 для достоверности результата.</p>
                        <br/>
                        <p>По результатам прохождения теста будет определена ваша роль в команде.</p>
                    </Typography>
                </>}
            
                <div style={
                    {
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'baseline',
                        flexGrow: 1,
                    }
                }>
                
                    <div>
                        <Typography
                            variant={"h6"} 
                            component={"h2"} 
                            className={sclasses.PageName}
                        >
                            { blockId + 1 } часть из { questionLength }
                        </Typography>
                    </div>

                    <div>
                        {blockId !== 0 && 
                        <ThemeProvider theme={buttonTheme}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={() => setInstructionModal(!instrcutionModal)} >
                            Инструкция
                        </Button>
                        </ThemeProvider>}
                    </div>

                </div>

                <div className={
                    instrcutionModal ? classes.instruction + ' ' + classes.instructionOpened
                                    : classes.instruction + ' ' + classes.instructionClosed }> 
                    <Typography 
                        gutterBottom 
                        className={classes.instructionsText} 
                        style={{fontSize: '14px', lineHeight: '20px'}}
                    >
                        <p>В каждой из семи частей данного теста распределите 10 баллов между 8-мью утверждениями. Если вы согласны с каким-либо утверждением на все 100%, вы можете отдать ему все 10 баллов. </p>

                        <p>По результатам прохождения теста будет определена ваша роль в команде.</p>
                    </Typography>
                </div>

                <FixNameBlock>
                    <Typography
                        align='center'
                        variant={"h6"} 
                        component={"h2"} 
                        className={sclasses.BoldLabel}
                    >
                        <p>
                            {currentQuestions.title}
                        </p>
                    </Typography>
                </FixNameBlock>

                {currentQuestions.questions.map((question: any, index: any) => (
                    <WrapperQuestion key={index} style={index === 7 ? {marginBottom: '120px'} : {}}>
                        <WrapperLabel>
                            <Typography 
                                id={"slider-question-" + index} 
                                gutterBottom 
                                style={ index === 0 ? { 
                                    marginTop: window.innerWidth > 1024 ? '25px' : '15px',
                                    fontWeight: 300,
                                    fontSize: 18,
                                } : {
                                    fontWeight: 300,
                                    fontSize: 18,
                                }} 
                                className={sclasses.Question}
                            >
                                {index + 1}.  {question}
                            </Typography>
                        </WrapperLabel>
                        <WrapperWrapperSlider>
                            <WrapperSlider paddingRight={(questionsRate[blockId][index] + possibleMaximumValueQuestion) * 10} >
                            <ThemeProvider theme={sliderTheme}>
                                <Slider
                                    onChange={(event, value) =>
                                        handleChangeQuestion(value, index)
                                    }
                                    value={questionsRate[blockId][index]}
                                    defaultValue={0}
                                    aria-labelledby="discrete-slider-restrict"
                                    step={1}
                                    min={0}
                                    max={
                                        questionsRate[blockId][index] + possibleMaximumValueQuestion === 0
                                            ? 1
                                            : questionsRate[blockId][index] + possibleMaximumValueQuestion
                                    }
                                    valueLabelDisplay="auto"
                                    marks={marks}
                                    className={classes.violet}
                                    disabled={questionsRate[blockId][index] + possibleMaximumValueQuestion === 0}
                                />
                            </ThemeProvider>
                            </WrapperSlider>
                        </WrapperWrapperSlider>
                    </WrapperQuestion>
                ))}
            </div>
            <WrapperControlPanel style={
                { 
                    paddingTop: '15px',
                    paddingBottom: '20px',
                }
            }>
            {possibleMaximumValueQuestion !== 0 && 
            <>
            <div style={{ display: 'flex', alignItems: 'baseline' }}>
                <p style={{ fontWeight: 600 }}> 
                    {possibleMaximumValueQuestion === 1 ? 'Остался ' : 'Осталось '}
                    {possibleMaximumValueQuestion} 
                    {possibleMaximumValueQuestion >= 5 ? ' баллов ' :
                    (possibleMaximumValueQuestion > 1 ? ' балла ' : ' балл ') } 
                    из 10 
                </p> 
                <WrapperTooltipInfo>
                    <TooltipInfo open={openInfo}>
                        <Typography>
                            Нужно распределить <b>{possibleMaximumValueQuestion}</b> из 10 баллов для продолжение
                            теста
                        </Typography>
                        <ButtonInfo onClick={() => setOpenInfo(false)}>Понятно</ButtonInfo>
                    </TooltipInfo>
                    <IconButton aria-label="info" onClick={() => setOpenInfo(true)}>
                        <InfoIconStyled size="20" />
                    </IconButton>
                </WrapperTooltipInfo>
            </div>
            </>}
            

                {blockId + 1 < questionLength && (
                    <ThemeProvider theme={ buttonTheme }>
                    <Button
                        variant="contained"
                        color="primary"
                        to={"/block/" + (blockId + 2)}
                        component={RouterLink}
                        disabled={sumValueQuestions < 10}
                    >
                        Далее
                    </Button>
                    </ThemeProvider>
                )}

                {blockId + 1 === questionLength && (
                    <ThemeProvider theme={ buttonTheme }>
                    <Button
                        variant="contained"
                        color="primary"
                        to="/test_result"
                        component={RouterLink}
                        disabled={sumValueQuestions < 10}
                    >
                        Результат
                    </Button>
                    </ThemeProvider>
                )}
            </WrapperControlPanel>
            </>
        );
}

export default withStyles(useStyles)(TestPage);


const WrapperQuestion = styled.div`
`;

const WrapperWrapperSlider = styled.div`
    padding: 0 2em;
    margin: 8px 0 24px;
`;

const WrapperSlider = styled.div`
    width: ${(props: { paddingRight: number }) => (props.paddingRight > 0 ? props.paddingRight : 10)}%;
    display: flex;
    user-select: none;
`;

const WrapperLabel = styled.div`
    user-select: none;
`;

const Bold = styled.strong`
    font-weight: bold;
`;

const FixNameBlock = styled.div`
    position: sticky;
    top: 0;
    font-size: 1.25em;
    padding: 2px 0;
    min-height: 2em;
    z-index: 10000;
    background-color: #fff;
    border-bottom: 2px solid #3c0068;
`;

const WrapperControlPanel = styled.div`
    display: flex;
    flex-direction: row;
    position: fixed;
    bottom: 0;
    justify-content: center;
    align-items: center;
    padding: 8px 0;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    width: 100%;
    z-index: 10000;
    max-width: 1024px;
    background-color: #fff;
    border-top: 1px solid #eee;

    @media screen and (max-width: 960px) {
        font-size: 16px;
    }
`;

const InfoIconStyled = styled(InfoIcon)`
    color: #5850f1;
`;

const WrapperTooltipInfo = styled.div`
    position: relative;
    display: inline-block;
`;

const TooltipInfo = styled.div`
    visibility: ${(props: { open: boolean }) => (props.open ? "visible" : "hidden")};
    width: 240px;
    background-color: #1c1c1c;
    color: #ccc;
    text-align: center;
    padding: 5px;
    border-radius: 3px;

    bottom: 100%;
    left: 50%;
    margin-left: -120px;
    position: absolute;
    z-index: 1;
`;

const ButtonInfo = styled.div`
    cursor: pointer;
    background-color: #fff;
    color: #242424;
    padding: 0.5em;
    margin: 0.5em;
    border: 1px solid #ccc;
    border-radius: 1px;
`;

const marks = [
    { value: 0, label: "0" },
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6" },
    { value: 7, label: "7" },
    { value: 8, label: "8" },
    { value: 9, label: "9" },
    { value: 10, label: "10" },
];
