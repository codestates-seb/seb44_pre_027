import {styled} from 'styled-components';

import Link from '../common/atoms/Link';
import QuestionMessage from '../assets/icons/QuestionMessage';
import UpDownArrow from '../assets/icons/UpDownArrow'
import TagIcon from '../assets/icons/TagIcon';
import TrophyIcon from '../assets/icons/TrophyIcon';

const SignupIntro = () => {
    const IntroContainer = styled.div`
        display: flex;
        flex-direction: column;
        margin: 0 48px 128px 0;
    `;

    return(
        <IntroContainer>
                    <h1 className='mb-3 text-3xl'>Join the Stack Overflow community</h1>
                    <div className='flex gap-2 items-center'>
                        <QuestionMessage/>
                        <div className='text-lg my-3'>Get unstuck — ask a question</div>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <UpDownArrow/>
                        <div className='text-lg my-3'>Unlock new privileges like voting and commenting</div>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <TagIcon/>
                        <div className='text-lg my-3'>Save your favorite questions, answers, watch tags, and more</div>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <TrophyIcon/>
                        <div className='text-lg my-3'>Earn reputation and badges</div>
                    </div>

                    <p className='text-xs text-slate-400 mt-5' >Collaborate and share knowledge with a private group for FREE.</p>
                    <Link text='Get Stack Overflow for Teams free for up to 50 users.'/>
                </IntroContainer>
    )
}

export default SignupIntro;