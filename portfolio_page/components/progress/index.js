
import { useNProgress } from "@tanem/react-nprogress";

import Bar from "./bar";
import Container from "./container";

const Progress = ({ isAnimating }) => {
    const { animationDuration, progress, isFinished } = useNProgress({
        isAnimating,
    })

    return (
        <Container animationDuration={animationDuration} isFinished={isFinished}>
            <Bar animationDuration={animationDuration} progress={progress} />
        </Container>
    )
}

export default Progress