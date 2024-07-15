import "./gap.scss";

interface Props {
    props: string;
}
const Gap: React.FC<Props> = ({ props }) => {
    return (
        <div className="gap">
            <div className="gap__element">{props}</div>
        </div>
    );
};

export default Gap;
