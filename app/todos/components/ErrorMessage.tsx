const typeToMessageMapping: { [key: string]: string } = {
    required: "Title is required",
    minLength: "Title must be at least 3 characters"
};
export default function ErrorMessage({ errorType }: { errorType: string | undefined }) {
    return (
        <div>
            { errorType && (<span className='font-medium text-red-500'>{typeToMessageMapping[errorType]}</span>)}
        </div>
        
    );
}