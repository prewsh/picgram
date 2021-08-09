import React, { useState } from 'react'
import ProgressBar from './progressBar';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg']

    const handleChange = (e) =>{
        // console.log(e.target.files)
        let selected = e.target.files[0];

        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError('')
        } else{
            setFile(null);
            setError('please upload the required file type');
        }
    }

    return(
        <form>
            <label>
                <input type="file" onChange={handleChange} />
                <span>+</span>
            </label>
            <div className='output'>
            {file && <div>{file.name}</div>}
            {error && <div className='error'>{error}</div>}
            {file && <ProgressBar file={file} setFile={setFile}/> }
                
            </div>
        </form>
    )
}

export default UploadForm;