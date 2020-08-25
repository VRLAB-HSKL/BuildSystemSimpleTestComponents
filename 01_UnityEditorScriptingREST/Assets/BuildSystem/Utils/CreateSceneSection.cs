using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine.SceneManagement;

public class CreateSceneSection 
{
    
    public void createSceneWithAssets(string sceneName, bool b_viu, bool b_gvr, bool b_wave)
    {
        Scene test =  EditorSceneManager.NewScene(NewSceneSetup.EmptyScene, NewSceneMode.Single);
        test.name = sceneName;
        EditorSceneManager.SaveScene(test, "Scenes/");
    }
}
