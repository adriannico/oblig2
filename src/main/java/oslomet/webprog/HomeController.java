package oslomet.webprog;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.ArrayList;
import java.util.List;


@RestController
public class HomeController {

    public final List<Kunde> kunder = new ArrayList<>();

    @PostMapping("/lagreKunde")
    public void lagreKunde(Kunde person){
        kunder.add(person);
    }

    @GetMapping("/hentKunder")
    public List<Kunde> hentKunder(){
        return kunder;
    }

    @GetMapping("/slettKunder")
    public void slettKunder(){
        kunder.clear();
    }
    


    @GetMapping("/")
    public String returnKunde(String navn) {
        return "Halla hva skjer " + navn;
    }
}


