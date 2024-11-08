const withPromotedLabel = (WrappedComponent) => {
    return (props) => {
        console.log("props", props)
        const { promoted, ...enhancedProps } = props;
        return (
            <div>
                {promoted && <label className="absolute bg-black text-white mx-2 px-2">Promoted</label>}
                <WrappedComponent {...enhancedProps} />
            </div>
        )
    }
}
export default withPromotedLabel;