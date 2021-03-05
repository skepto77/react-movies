import { useHistory } from 'react-router-dom';
import { Helmet } from "react-helmet";

const About = () => {
  const { goBack } = useHistory();
  return (
    <> 
      <Helmet>
        <title>About - Movies</title>
      </Helmet>
      <div className="row">
        <div className="col-12">
          <button className="btn btn-light" onClick={goBack}>back</button>
          <h2>About</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat nibh sagittis, convallis ipsum vel, condimentum felis. Phasellus metus felis, elementum non felis id, ultricies scelerisque metus. Nulla scelerisque tellus ut facilisis pellentesque. Etiam tristique risus in elementum commodo. Morbi cursus erat eu ipsum ultricies, non consequat ligula accumsan. Sed tempor sollicitudin diam, eu lacinia est mollis non. Ut cursus pellentesque diam, eu vehicula mi hendrerit id. Cras eget aliquet purus, a hendrerit ipsum. Nam fringilla ante ligula, eget consectetur risus convallis eget. Donec sit amet sem orci. Curabitur commodo lorem non scelerisque blandit. Fusce ut mauris sodales, viverra tortor et, tincidunt eros. Ut elementum mauris a posuere fermentum. Maecenas consectetur mi non ligula efficitur lacinia.
          </p><p>Nam ac urna dictum, tristique tellus ullamcorper, scelerisque tellus. Pellentesque nec enim est. Vivamus eros mi, sodales eget est et, interdum ultricies ante. Duis et sagittis velit. Nam feugiat libero eu leo condimentum, eu dapibus nunc bibendum. Sed non metus eros. In mi ex, blandit egestas vestibulum eget, viverra sed est. Maecenas rhoncus rutrum ante eu dapibus. Mauris pharetra euismod imperdiet. Donec interdum sollicitudin est a tincidunt. Praesent luctus, leo nec luctus placerat, turpis quam interdum lorem, in gravida diam enim ut justo. In lorem est, laoreet vitae consectetur nec, aliquam a lorem. Aenean nec velit at sapien egestas elementum at a metus. Proin semper feugiat eros, eget egestas sem sagittis quis. Mauris viverra nunc neque, ac vulputate justo efficitur sit amet. Curabitur metus velit, finibus sit amet porttitor non, egestas sit amet quam.
          </p><p>Ut mollis hendrerit eros ac interdum. Ut ac magna mi. Nulla sollicitudin, turpis id laoreet tristique, massa risus tincidunt leo, et mollis sem quam non leo. Donec sagittis tellus ac magna rhoncus, id finibus quam tempus. Nullam dapibus vestibulum dictum. Duis semper quam in nisl blandit imperdiet. Maecenas id leo eget magna sagittis egestas. Donec eu augue leo. Nunc cursus nunc ex, nec maximus justo pellentesque nec. Vestibulum ultrices est eget ligula blandit consectetur. Vivamus rutrum ante in tincidunt suscipit. Sed fermentum arcu nisi. Ut a turpis egestas, venenatis nibh id, hendrerit nisi. Pellentesque auctor in ante sit amet vulputate.
          </p><p>Duis sagittis sollicitudin diam, sodales egestas mi rutrum et. Aenean non enim sed mi consectetur semper. Duis efficitur est vitae feugiat pharetra. Vivamus in mauris pellentesque, scelerisque ante eu, malesuada metus. Donec eget consectetur odio. Fusce sollicitudin risus sed porttitor auctor. Maecenas est ligula, suscipit in fringilla et, venenatis at turpis. Curabitur lectus lorem, maximus ultricies ipsum a, condimentum elementum dui. Cras id urna quis ante feugiat cursus. Sed porttitor venenatis nisi, vel tempor diam malesuada rhoncus. Nulla luctus justo eget ante commodo, eget luctus purus placerat. Curabitur sit amet bibendum eros, et sagittis diam. Donec laoreet porta ex. Donec volutpat sapien lorem, vel auctor nisl tincidunt a. Aenean at mauris tristique, vehicula risus volutpat, pharetra urna.
          </p><p>Sed diam orci, auctor vel ultricies vitae, porta sit amet urna. Cras vestibulum scelerisque blandit. Suspendisse accumsan risus at elit ultricies mollis. Duis blandit, sapien ac consectetur vulputate, magna nibh facilisis ex, et maximus purus lacus vel leo. Nulla quis tincidunt justo, sit amet molestie nisl. Etiam enim metus, interdum in volutpat vitae, accumsan sit amet felis. Aenean gravida mi non dapibus dapibus. Quisque ac aliquam dui, in tincidunt turpis. Maecenas metus massa, iaculis non interdum eu, dictum non eros. Mauris sit amet orci tincidunt, vestibulum lacus vitae, sollicitudin lorem. Fusce vel arcu nulla. Proin commodo erat in nisl volutpat tincidunt. Etiam faucibus nisl vitae lacinia hendrerit. Ut tortor nisl, placerat vel neque eget, pretium elementum velit. Fusce in lacus id metus aliquam semper vel non leo. Aliquam sed mi posuere, commodo orci quis, malesuada turpis.
          </p>
        </div>
      </div>
    </>
  )
}

export default About;