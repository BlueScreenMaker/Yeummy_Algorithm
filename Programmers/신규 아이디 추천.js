function solution(new_id) {
    let newId = new_id.toLowerCase()
                    .replace(/[^\w\.\-]/g,'')
                    .replace(/[\.]{2,}/g,'.')
                    .replace(/^\./,'')
                    .replace(/\.$/,'');

    if (!newId) newId = "a";

    if(newId.length >= 16) {
        newId = newId.slice(0,15).replace(/\.$/,'');
    }

    if (newId.length <= 2) {
        newId = newId.padEnd(3, newId[newId.length - 1]);
    }

    return newId;
}