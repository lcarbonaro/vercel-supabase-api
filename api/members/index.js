import { createClient } from '@supabase/supabase-js'

const {SUPABASE_URL,SUPABASE_KEY} = process.env;

const supabase = createClient(SUPABASE_URL,SUPABASE_KEY);

module.exports = async (req,res) => {
    if( req.method==='GET') {
        const { data, error } = await supabase.from('members').select();
        res.json(data);    
    } else if( req.method==='POST' ) {
        let {firstName,lastName,age,isActive,joined} = req.body;
        const { data, error } = await supabase
        .from('members')
        .insert([
            {firstName,lastName,age,isActive,joined}
        ]);
        res.json(data);    
    }    
}