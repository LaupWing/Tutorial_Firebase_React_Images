import React, {useState} from 'react';

const UploadForm = ()=>{
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const types = ['image/png', 'image/jpeg', 'image/jpg']

    const changeHandler = e =>{
        let selected = e.target.files[0];
        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError(null);
        }else{
            setFile(null);
            setError('Please select an image file');
        }
    }
    return (
        <form>
            {console.log('rendering upploadform')}
            <input type="file" onChange={changeHandler}/>
            <div className="output">
                {error && <div className={error}>{error}</div>}
            </div>
        </form>
    );
}

export default UploadForm;