import { FC, memo } from 'react'
import NavBar from '../../components/NavBar'
import MySelfComp from '../../components/Myself'
import WhoIAmComp from '../../components/WhoIAm'
import DividerWithChip from '../../components/Divider'
import EducationComp from '../../components/Education'
import WorkComp from '../../components/Work'
import EntrepreneurComp from '../../components/Entrepreneur'
import SkillsComp from '../../components/Skills'
import BootcampProjects from '../../components/BootCampProjects'
import FreelanceProjects from '../../components/FreelancerProjects'
import SoftSkills from '../../components/SoftSkills'
import AnimatedView from '../../animations/AnimatedContainer'

const Landing: FC = () => {
    return (
        <>
            <AnimatedView>
                <NavBar />
                <MySelfComp />
            </AnimatedView>
            <DividerWithChip label="Know me more" />
            <AnimatedView>
                <WhoIAmComp />
            </AnimatedView>
            <DividerWithChip label="My Education" />
            <AnimatedView>
                <EducationComp />
            </AnimatedView>
            <DividerWithChip label="Work Experiences" />
            <AnimatedView>
                <WorkComp />
            </AnimatedView>
            <DividerWithChip label="Entrepreneurship" />
            <AnimatedView>
                <EntrepreneurComp />
            </AnimatedView>
            <DividerWithChip label="Skills" />
            <AnimatedView>
                <SkillsComp />
            </AnimatedView>
            <DividerWithChip label="Soft Skills" />
            <AnimatedView>
                <SoftSkills />
            </AnimatedView>
            <DividerWithChip label="BootCamp Projects" />
            <AnimatedView>
                <BootcampProjects />
            </AnimatedView>
            <DividerWithChip label="Freelancer Projects" />
            <AnimatedView>
                <FreelanceProjects />
            </AnimatedView>

        </>
    )
}

export default memo(Landing)
