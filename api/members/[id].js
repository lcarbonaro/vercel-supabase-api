import { createClient } from '@supabase/supabase-js';

const {SUPABASE_URL,SUPABASE_KEY} = process.env;

const supabase = createClient(SUPABASE_URL,SUPABASE_KEY);

module.exports = async (req,res) => {
    const { query: { id }, } = req;
    if(req.method==='GET') {
        const { data, error } = await supabase
        .from('members')
        .select()
        .filter('id', 'eq', id);
        res.json(data);
    } else if( req.method==='PUT') {        
        const { data, error } = await supabase
        .from('members')
        .update(req.body)
        .match({ id });
        res.json(data);      
    } else if( req.method==='DELETE' ) {        
        const { data, error } = await supabase
        .from('members')
        .delete()
        .match({ id });
        res.json(data);      
    }     
}