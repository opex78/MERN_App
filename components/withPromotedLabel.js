const withPromotedLabel = (WrappedComponent) => {
    return (props) => {
        console.log("props", props)
        const { promoted } = props;
        return (
            <div>
                {promoted && <label>Promoted</label>}
                <WrappedComponent {...props} />
            </div >
        )
    }
}
export default withPromotedLabel;