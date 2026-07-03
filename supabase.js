const supabaseUrl = "https://dphdiesjkqtkhxuxrpfg.supabase.co";
const supabaseKey = "sb_publishable_fQxLUYm7Qq9-SiBXgXU7HQ_CV-1sUpo";

console.log(window.supabase);

const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

console.log(supabase);
