const withPromotedLabel = (WrappedComponent) => {
    return (props) => {
        console.log("props", props)
        const { promoted, ...enhancedProps } = props;
        return (
            <div>
                {promoted && <label>Promoted</label>}
                <WrappedComponent {...enhancedProps} />
            </div>
        )
    }
}
export default withPromotedLabel;