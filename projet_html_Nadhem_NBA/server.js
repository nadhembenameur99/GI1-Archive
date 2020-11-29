var app = module.exports = express();

app.engine('html');
app.set('view engine', 'html');
app.use(methodOverride());
app.use(express.static(__dirname + '/'));
app.get('/', routes.index);
app.listen(8080);
console.log("NBA Nadhem's magic happens on port 8080...");